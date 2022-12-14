/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { login } from "../components/auth";
import { signInWithGoogle } from '../components/firebase';
import firebase from "firebase/compat/app";
import { auth } from '../components/firebase'
// import GoogleAuthCallback from '../components/GoogleAuthCallback'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tryAgain, setTryAgain] = useState('new');
  const router = useRouter();
  const appContext = useContext(AppContext);

  // if(appContext.user.providerData != null) console.log(`LOGIN CALLED ${JSON.stringify(appContext.user.providerData)}`)

  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              {/* <img src="http://localhost:1337/uploads/5a60a9d26a764e7cba1099d8b157b5e9.png" /> */}
              <h3 style={{ color: 'red', float: 'center' }}>{tryAgain == 'fail' ? 'Please Try Again' : tryAgain =='new' ? '' : tryAgain =='success' ? 'Welcome!' : ''}</h3>
            </div>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    {/* <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                    <Button
                      // style={{ float: "right", width: 120 }}
                      style={{margin: 15}}
                      color="primary"
                      onClick={() => {
                        setLoading(true);
                        firebase.auth().signOut();
                        login(data.identifier, data.password)
                          .then((res) => {
                            setLoading(false);
                            setTryAgain('success');
                            // set authed User in global context to update header/app state
                            appContext.setUser(res.data.user.username);
                          })
                          .catch((error) => {
                            //setError(error.response.data);
                            setLoading(false);
                            setTryAgain('fail');
                          });
                      }}
                    >
                      {loading ? "Loading... " : "Submit"}
                    </Button>
                    <Button
                      id='googlelogin'
                      color="secondary"
                      onClick={() => {
                        // (window.location = 'http://localhost:1337/connect/google')
                          signInWithGoogle()
                            .then((res) => {
                                setLoading(false);
                                setTryAgain('success');
                                // set authed User in global context to update header/app state
                                appContext.setUser(res.data.user.username);
                                console.log('SUCCESS GOOGLE  ')
                              })
                              .catch((error) => {
                                //setError(error.response.data);
                                console.log('ERROROROROROR 404  ', error)
                                setLoading(false);
                                // user ? setTryAgain('success'): setTryAgain('fail');
                              });
                          // setLoading(false);
                        }
                      }
                    >
                      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                      {' Google Sign In'}
                    </Button>
          
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
}
export default Login;
