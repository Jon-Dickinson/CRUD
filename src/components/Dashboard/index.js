import React, { useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { employeesData } from "../../data";

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div className="flex__mid-container direction--column margin-t-20">
      <Tabs>
        <TabList>
          <Tab>Table 1</Tab>
          <Tab>Table 2</Tab>
        </TabList>

        <TabPanel>
          {!isAdding && !isEditing && (
            <>
              <Header
                setIsAdding={setIsAdding}
                setIsAuthenticated={setIsAuthenticated}
              />
              <Table
                employees={employees}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          )}
          {isAdding && (
            <Add
              employees={employees}
              setEmployees={setEmployees}
              setIsAdding={setIsAdding}
            />
          )}
          {isEditing && (
            <Edit
              employees={employees}
              selectedEmployee={selectedEmployee}
              setEmployees={setEmployees}
              setIsEditing={setIsEditing}
            />
          )}
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
