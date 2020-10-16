import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Header, Input, Table } from "semantic-ui-react";
import Loader from "../layout/Loader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="page">
      <Header>List of Registered Participants</Header>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Input
            icon="search"
            placeholder="Search..."
            onChange={(e) => setFilter(e.target.value)}
          />
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {users
                .filter(
                  (user) =>
                    (user.Email.includes(filter) ||
                      user.FirstName.includes(filter) ||
                      user.LastName.includes(filter)) &&
                    user.Email !== "bacuponline2020@gmail.com"
                )
                .map((user) => (
                  <Table.Row key={`user-${user.Email}`}>
                    <Table.Cell>
                      {user.FirstName} {user.LastName}
                    </Table.Cell>
                    <Table.Cell>{user.Email}</Table.Cell>
                    <Table.Cell>{user.PhoneNumber}</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => {
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
                            });
                        }}
                      >
                        Send password
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
}
