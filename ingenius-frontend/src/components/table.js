import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { loadStudents } from "../components/../redux/actions/actions";
import { deleteStudentRequest } from "../components/../redux/actions/actions";
import { editStudentRequest } from "../components/../redux/actions/actions";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      delete: false,
      id: 0,
      edit: false,
      uid: 0,
      student_name: "",
      counsellor_name: "",
      role: "",
      hours: "",
      joining_date: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleClickOpen(id) {
    this.setState({ delete: true, id: id });
  }

  handleClose = () => {
    this.setState({ delete: false });
  };

  handleEdit(id) {
    const data = { id: id };
    axios
      .get(`http://localhost:3001/api/editStudentRequest/${data.id}`)
      .then(response => {
        console.log(response);
        console.log(response.data.student);
        if (response.data.status === 200) {
          this.setState({
            edit: true,
            uid: response.data.student.uid,
            student_name: response.data.student.student_name,
            counsellor_name: response.data.student.counsellor_name,
            role: response.data.student.role,
            hours: response.data.student.hours,
            joining_date: response.data.student.joining_date
          });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  submitEdit = e => {
    e.preventDefault();
    const data = {
      id: this.state.uid,
      student_name: this.state.student_name,
      counsellor_name: this.state.counsellor_name,
      role: this.state.role,
      hours: this.state.hours,
      joining_date: this.state.joining_date
    };
    console.log(data);
    axios
      .post("http://localhost:3001/api/editStudentDetails", data)
      .then(response => {
        console.log(response);
      });

    this.handleCloseEdit();
    window.location.reload();
  };

  handleCloseEdit = () => {
    this.setState({ edit: false });
  };

  handleRemove() {
    console.log(this.state.id);
    const data = {
      id: this.state.id
    };
    console.log(data);
    this.handleClose();
    this.props.deleteStudentRequest(data);
    window.location.reload();
  }

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    const { students } = this.props;
    const { edit } = this.state;

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Counsellor Name</TableCell>
              <TableCell align="right">Hours Used</TableCell>
              <TableCell align="right">Joining Date</TableCell>
              <TableCell align="right">Counsellor Role</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.uid}>
                <TableCell component="th" scope="row">
                  {student.student_name}
                </TableCell>
                <TableCell align="right">{student.counsellor_name}</TableCell>
                <TableCell align="right">{student.hours}</TableCell>
                <TableCell align="right">{student.joining_date}</TableCell>
                <TableCell align="right">{student.role}</TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={id => {
                      this.handleEdit(student.uid);
                    }}
                  />
                  <Dialog
                    open={edit}
                    onClose={this.handleCloseEdit}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">
                      Edit Student Details
                    </DialogTitle>

                    <DialogActions>
                      <form>
                        <TextField
                          id="student_name"
                          label="Student Name"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          style={{ marginBottom: 8 }}
                          defaultValue={this.state.student_name}
                          onChange={this.handleChange}
                        />

                        <TextField
                          id="counsellor_name"
                          label="Counsellor"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          style={{ marginBottom: 8 }}
                          defaultValue={this.state.counsellor_name}
                          onChange={this.handleChange}
                        />

                        <TextField
                          id="hours"
                          label="Hours used"
                          type="number"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          style={{ marginBottom: 8 }}
                          defaultValue={this.state.hours}
                          onChange={this.handleChange}
                        />

                        <TextField
                          id="joining_date"
                          label="Date Joined"
                          type="date"
                          variant="outlined"
                          fullWidth
                          style={{ marginBottom: 8 }}
                          InputLabelProps={{
                            shrink: true
                          }}
                          defaultValue={this.state.joining_date}
                          onChange={this.handleChange}
                        />

                        <TextField
                          id="role"
                          label="Counsellor Role"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          style={{ marginBottom: 8 }}
                          defaultValue={this.state.role}
                          onChange={this.handleChange}
                        />

                        <Button
                          color="primary"
                          type="submit"
                          variant="contained"
                          style={{ marginLeft: "30%" }}
                          onClick={this.submitEdit}
                        >
                          Edit Student Details
                        </Button>
                      </form>
                    </DialogActions>
                  </Dialog>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <DeleteIcon
                    onClick={id => {
                      this.handleClickOpen(student.uid);
                    }}
                  />
                  <Dialog
                    open={this.state.delete}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Are you sure you want to delete this row?
                    </DialogTitle>

                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        Disagree
                      </Button>
                      <Button
                        onClick={() => {
                          this.handleRemove();
                        }}
                        color="primary"
                        autoFocus
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = ({ isLoading, students, error, editStudent }) => ({
  isLoading,
  students,
  error,
  editStudent
});

const mapDispatchToProps = dispatch => ({
  loadStudents: () => dispatch(loadStudents()),
  deleteStudentRequest: id => dispatch(deleteStudentRequest(id)),
  editStudentRequest: id => dispatch(editStudentRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTable);
