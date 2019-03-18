// import React, { Fragment } from "react";
// import { Component } from "react";
// import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";
// import { bindActionCreators } from "redux";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import TextField from "@material-ui/core/TextField";
// import { Formik } from "formik";
// import EditIcon from "@material-ui/icons/Edit";

// import * as Yup from "yup";
// import { connect } from "react-redux";
// import { addStudentRequest } from "../redux/actions/actions";
// //import addStudent from "../redux/reducers/addStudent";

// class EditStudent extends Component {
//   state = {
//     open: false
//   };

//   handleToggle = () => {
//     this.setState(prevState => ({
//       open: !prevState.open
//     }));
//   };
//   refresh = () => {
//     window.location.reload();
//   };

//   render() {
//     const { open } = this.state;
//     const { id } = this.props;
//     console.log(id);
//     return (
//       <Fragment>
//         <EditIcon onClick={this.handleToggle} cursor="pointer" />

//         <Dialog
//           open={open}
//           onClose={this.handleToggle}
//           aria-labelledby="form-dialog-title"
//         >
//           <DialogTitle id="form-dialog-title">Edit Student Details</DialogTitle>

//           <DialogActions>
//             <Formik
//               initialValues={{
//                 studentName: "Sarang",
//                 counsellorName: "",
//                 number: "",
//                 date: "",
//                 role: ""
//               }}
//               onSubmit={(values, { resetForm }) => {
//                 this.props.addStudentRequest(values);
//                 resetForm(); // Call the api
//               }}
//               validationSchema={Yup.object().shape({
//                 studentName: Yup.string().required("Student Name is required"),
//                 counsellorName: Yup.string().required(
//                   "Counsellor Name is required"
//                 ),
//                 number: Yup.number()
//                   .required("Number is required")
//                   .positive("Number should be positive")
//                   .integer("Number should be an integer"),
//                 date: Yup.date().required("Please enter joining date"),
//                 role: Yup.string().required("Please enter counsellor role")
//               })}
//               component={this.form}
//             />
//           </DialogActions>
//         </Dialog>
//       </Fragment>
//     );
//   }

//   form = ({
//     handleSubmit,
//     handleChange,

//     values,
//     errors,
//     touched
//   }) => {
//     return (
//       <form method="POST" onSubmit={handleSubmit}>
//         {touched.studentName && errors.studentName && (
//           <p>{errors.studentName}</p>
//         )}
//         <TextField
//           id="studentName"
//           label="Student Name"
//           margin="normal"
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 8 }}
//           value={values.studentName}
//           onChange={handleChange}
//         />
//         {touched.counsellorName && errors.counsellorName && (
//           <p>{errors.counsellorName}</p>
//         )}
//         <TextField
//           id="counsellorName"
//           label="Counsellor"
//           margin="normal"
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 8 }}
//           value={values.counsellorName}
//           onChange={handleChange}
//         />
//         {touched.number && errors.number && <p>{errors.number}</p>}
//         <TextField
//           id="number"
//           label="Hours used"
//           type="number"
//           margin="normal"
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 8 }}
//           value={values.number}
//           onChange={handleChange}
//         />
//         {touched.date && errors.date && <p>{errors.date}</p>}
//         <TextField
//           id="date"
//           label="Date Joined"
//           type="date"
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 8 }}
//           InputLabelProps={{
//             shrink: true
//           }}
//           value={values.date}
//           onChange={handleChange}
//         />
//         {touched.role && errors.role && <p>{errors.role}</p>}
//         <TextField
//           id="role"
//           label="Counsellor Role"
//           margin="normal"
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 8 }}
//           value={values.role}
//           onChange={handleChange}
//         />
//         {/* <button color="primary">Create</button> */}
//         <Button
//           color="primary"
//           type="submit"
//           variant="contained"
//           style={{ marginLeft: "20%", marginRight: "20%" }}
//         >
//           Add Student
//         </Button>
//         <Button color="secondary" variant="contained" onClick={this.refresh}>
//           Close Dialog
//         </Button>
//       </form>
//     );
//   };
// }

// const mapDispatchToProps = dispatch => ({
//   addStudentRequest: values => dispatch(addStudentRequest(values))
// });
// const mapStateToProps = ({ isLoading, students, error, added }) => ({
//   isLoading,
//   students,
//   error,
//   added
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditStudent);
