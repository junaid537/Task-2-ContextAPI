import React, { useContext } from "react";
import { LoginContext } from "./contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../apis/GitUsersApis";
import { Card } from "./Card";
export function Home() {
  const { username } = useContext(LoginContext);
  const { isLoading, error, isError, data } = useQuery(
    ["unique"],
    getAllUsers
  );
  if (isLoading) return "Loading";
  if (error) return "An error has occured " + error.message;
  return (
    <>
      <div>Profile</div>
      <div>Welcome to Home Mr.: {username}</div>
      {
        <div className="container">
        {data.map((element) => {
          return (
            <div key={element.id} style={{marginLeft:"100px"}}>
              <Card data={element} />
            </div>
          );
        })}
      </div>
        
      }
    </>
  );
}
