import React, { useState } from "react";
import { Input, Table } from "semantic-ui-react";

const users = [
  {
    email: "bambang@pamungkas.com",
    name: "bambang pamungkas",
    phone: "081234567890",
  },
  {
    email: "hendro@kartiko.com",
    name: "hendro kartiko",
    phone: "089012345678",
  },
  { email: "bima@sakti.com", name: "bima sakti", phone: "085678901234" },
];

export default function Users() {
  const [filter, setFilter] = useState("");

  return (
    <div className="page">
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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users
            .filter(
              (user) =>
                user.email.includes(filter) || user.name.includes(filter)
            )
            .map((user) => (
              <Table.Row key={`user-${user.email}`}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phone}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
