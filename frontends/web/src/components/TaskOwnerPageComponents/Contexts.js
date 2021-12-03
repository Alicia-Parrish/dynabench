/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Form, Col, Card, Button } from "react-bootstrap";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import UserContext from "../../containers/UserContext";

const Contexts = (props) => {
  async function fetchTags(tid, rid) {
    let result = await context.api.getAllTaskTags(tid, rid);
    return result;
  }

  useEffect(() => {
    fetchTags(props.tid, props.values.rid).then((result) => {
      setTags(result);
    });
  }, []);

  const context = useContext(UserContext);
  const [tags, setTags] = useState([]);

  return (
    <Container>
      <Form.Group controlId="contexts_file">
        Add new contexts by uploading them here, as a jsonl where each line has
        three fields: <br /> <br />
        <b>context</b>: a json-style dict with keys and values for each of the
        context components in your task's Annotation Config JSON.
        <br />
        <b>tag</b>: a string that associates this context with a set of other
        contexts <br />
        <b>metadata</b>: a dictionary in json format representing any other data
        that is useful to you <br /> <br />
        {props.values.contexts_file ? (
          <div className="UploadResult">
            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col md={10}>{props.values.contexts_file.name}</Col>
                    <Col md={2}>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={(event) => {
                          props.setFieldValue("contexts_file", null);
                        }}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <DragAndDrop
            handleChange={(event) => {
              props.setValues({
                ...props.values,
                contexts_file: event.currentTarget.files[0],
              });
            }}
          >
            Drag
          </DragAndDrop>
        )}
      </Form.Group>
      <p>
        You can also select the tags of the contexts you want to be shown in
        this round.
      </p>
      <Form.Group controlId="selected_tags">
        {tags.map((tag) => {
          return (
            <Form.Check
              type="checkbox"
              label={tag}
              name="selected_tags"
              value={tag}
              onChange={(event) => {
                props.setFieldValue("selected_tags", event.target.value);
              }}
            />
          );
        })}
      </Form.Group>
    </Container>
  );
};

export default Contexts;
