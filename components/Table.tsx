import React from "react";
import { BiEdit } from "react-icons/bi";

const TABLEHEADINGS = [
  "Name",
  "Email",
  "Salary",
  "Birthday",
  "Status",
  "Actions",
];
const Table = () => {
  return (
    <table className="min-w-full table-auto">
      <thead className="rounded">
        <tr>
          {TABLEHEADINGS.map((tableHeading: string) => {
            return (
              <th key={tableHeading} className="bg-indigo-800 px-16 py-2">
                <span className="text-white">{tableHeading}</span>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-3 text-center">
            <img src="#" alt="" />
            <span>new user</span>
          </td>
          <td className="text-center">email@gmail.com</td>
          <td className="text-center">200000</td>
          <td className="text-center">20/01/2022</td>
          <td className="text-center">
            <span className="bg-pink-200 p-1 px-4 rounded">Active</span>
          </td>
          <td className="text-center">
            <BiEdit color="#111827" className="cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
