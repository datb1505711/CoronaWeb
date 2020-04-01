// class LoginForm extends Component {
//   render() {
//     return (
//       <div className="Login">
//         <form>
//           <FormGroup controlId="email" bsSize="large">
//             <label>Email</label>
//             <FormControl
//               autoFocus
//               type="email"
//               value="email"
//               //   onChange={e => setEmail(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <label>Password</label>
//             <FormControl
//               value="1234"
//               //   onChange={e => setPassword(e.target.value)}
//               type="password"
//             />
//           </FormGroup>
//           <Button block bsSize="large" type="submit">
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

//// DEMO/////
// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: this.props.name, age: 22 };
//     console.log("constructor");
//   }
//   UNSAFE_componentWillMount() {
//     console.log("componentWillMount");

//   }
//   // static getDerivedStateFromProps(props, state) {
//   //   console.log("getDerivedStateFromProps");

//   // }
//   // getSnapshotBeforeUpdate(prevProps, prevState) {
//   //   console.log("getSnapshotBeforeUpdate");
//   //   return "";
//   // }

//   render() {
//     console.log("render");
//        [
//       'primary',
//       'secondary',
//       'success',
//       'danger',
//       'warning',
//       'info',
//       'light',
//       'dark',
//     ].map((variant, idx) => (
//       <Alert key={idx} variant={variant}>
//         This is a {variant} alert—check it out!
//       </Alert>
//     ));
//     return (
//       <Card bg="light" >
//          <ButtonGroup size="sm" aria-label="Basic example" vertical="false" >
//   <Button variant="secondary" >Left</Button>
//   <Button variant="secondary">Middle</Button>
//   <Button variant="secondary">Right</Button>
// </ButtonGroup>
//          <Image
//                           src="https://4.bp.blogspot.com/-zYz3d_33Pwg/WpQhpu-VVOI/AAAAAAAABmo/Lk-pOQaSHCwuEikMBSd1B6g1ABjOzCbwwCEwYBhgL/s1600/Untitled.png"
//                           roundedCircle
//                             height = "200px"
//                             width="300px"
//                           className="form-logo-img"
//                         />
//         <span className="label label-success">
//           Hello {this.state.name} - Your age is {this.state.age}, right?
//         </span>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={() => {
//             this.updateState();
//           }}
//         > Click me!</button>
//       </Card>
//     );
//   }
//   componentDidMount() {
//     console.log("componentDidMount");

//   }
//   UNSAFE_componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps");

//   }
//   shouldComponentUpdate(nextProps,nextState) {
//     console.log("shouldComponentUpdate");
//     return true;
//   }
//   UNSAFE_componentWillUpdate(nextProps) {
//     console.log("componentWillUpdate");
//   }
//   componentDidUpdate(preProps,preState) {
//     console.log("componentDidUpdate");

//   }
//   componentWillUnmount(){
//     console.log("componentWillUnmount");

//   }
//   updateState() {
//     // console.log(this.state.age + "" + this.state.name);
//     // console.log(this.props.name );
//     this.setState({ name: "Thanh Dat" });
//   }
// }
