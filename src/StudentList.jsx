import React from "react";
import "./styles.css";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function StudentList({ students, onClick, onChange }) {
  return (
    <>
      <div className="left-container">
        <input type="text" placeholder="search.." onChange={onChange} />
        <List component="nav" aria-label="contacts">
          <div className="student-list">
            {students.map((student, index) => (
              <ListItem button onClick={() => onClick(index)} key={student.id}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={student} />
              </ListItem>
            ))}
          </div>
        </List>
      </div>
    </>
  );
}
