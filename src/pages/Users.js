import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Header, Icon, Input, Table } from "semantic-ui-react";
import Loader from "../layout/Loader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState({ col: 0, mode: "desc" });
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  function getUsers() {
    setLoading(true);

    axios
      .get("http://backend.bacup.co/v/1/user", {
        headers: { Authorization: localStorage.getItem("TOKEN") },
      })
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(getUsers, []);

  useEffect(() => {
    const sortedUsers = [...users].sort((first, second) => {
      const mappedColumn = {
        0: "FirstName",
        1: "Email",
        2: "PhoneNumber",
        3: "Package",
        4: "Category",
        5: "Price",
        6: "Status",
      };

      if (first[mappedColumn[sort.col]] < second[mappedColumn[sort.col]]) {
        return sort.mode === "desc" ? -1 : 1;
      }

      if (first[mappedColumn[sort.col]] > second[mappedColumn[sort.col]]) {
        return sort.mode === "desc" ? 1 : -1;
      }

      return 0;
    });

    setUsers(sortedUsers);
  }, [sort]);

  const columns = [
    "Name",
    "Email",
    "Phone",
    "Package",
    "Category",
    "Fee",
    "Action Needed",
  ];

  return (
    <div className="page">
      <Header as="h1">List of Registered Participants</Header>

      {(updating || loading) && <Loader floating></Loader>}
      <Input
        icon="search"
        placeholder="Search by name, email, or phone number"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Table>
        <Table.Header>
          <Table.Row>
            {columns.map((col, index) => (
              <Table.HeaderCell
                key={`col-${index}-${col}`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const mode =
                    sort.col === index && sort.mode === "asc" ? "desc" : "asc";
                  setSort({ col: index, mode: mode });
                }}
              >
                {col}{" "}
                <Icon
                  name={
                    index !== sort.col
                      ? "sort"
                      : sort.mode === "asc"
                      ? "sort up"
                      : "sort down"
                  }
                />
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users
            .filter(
              (user) =>
                (user.Email.includes(filter) ||
                  user.FirstName.includes(filter) ||
                  user.LastName.includes(filter) ||
                  user.PhoneNumber.includes(filter)) &&
                user.Email !== "bacuponline2020@gmail.com"
            )
            .map((user) => (
              <Table.Row key={`user-${user.Email}`}>
                <Table.Cell>
                  {user.FirstName} {user.LastName}
                </Table.Cell>
                <Table.Cell>{user.Email}</Table.Cell>
                <Table.Cell>{user.PhoneNumber}</Table.Cell>
                <Table.Cell>{user.Package}</Table.Cell>
                <Table.Cell>{user.Category}</Table.Cell>
                <Table.Cell>IDR {user.Price.toLocaleString()}</Table.Cell>
                <Table.Cell>
                  {user.Status === 1 && (
                    <Button
                      onClick={() => {
                        setUpdating(true);
                        axios
                          .patch(
                            `http://backend.bacup.co/v/1/user?UserId=${user.UserID}`,
                            { Status: 2 },
                            {
                              headers: {
                                Authorization: localStorage.getItem("TOKEN"),
                              },
                            }
                          )
                          .then((res) => {
                            getUsers();
                          })
                          .catch((err) => {
                            console.log(err);
                          })
                          .finally(() => {
                            setUpdating(false);
                          });
                      }}
                      disabled={updating}
                    >
                      Send password
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
