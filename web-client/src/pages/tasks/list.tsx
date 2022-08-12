import React from "react";

import axios from "axios";
import { AxiosError } from "axios";
import { useAsyncEffect } from "use-async-effect";

import { Task } from "./types";

import { TaskViewer } from "../../templates/Task";
import { Meta } from "../../layout/Meta";
import { UserConstants } from "../../pages/session/types";
import { Main } from "../../templates/Main";
import { AppConfig } from "../../utils/AppConfig";

const TasksViewPageInner = () => {
  const [tasks, setTasks] = React.useState<Task[] | null>(null);

  const getTasks = async () => {
    const jwt = localStorage.getItem(UserConstants.JWT);

    if (!jwt) {
      return;
    }

    try {
      const response = await axios.get(`http://localhost:4000/v1/tasks/`, {
        headers: {
          Authorization: jwt,
        },
      });

      setTasks(response.data.data);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        alert(err.response?.data.errorMessage);
      } else {
        alert(err);
      }
    }
  };

  useAsyncEffect(getTasks, []);

  if (tasks) {
    const taskComponents = tasks.map((i) => (
      <TaskViewer id={i.id} title={i.title} slug={i.slug} />
    ));

    return <>{taskComponents}</>;
  } else {
    return <>You must be logged in to view this.</>;
  }
};

const TasksPageViewer = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <TasksViewPageInner />
    </Main>
  );
};

export default TasksPageViewer;
