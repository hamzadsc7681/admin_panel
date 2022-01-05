import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import MyTableRow from "./MyTableRow";
import { EarningData } from "../../utils/EarningData";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
} from "@mui/material";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const MyTable = () => {
  //
  const [checkedState, setcheckedState] = useState(false);
  //
  const [rowsPerPage, setrowsPerPage] = useState(5);
  const [paginateNumber, setpaginateNumber] = useState(0);
  const [toMapArray, settoMapArray] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    let _c = EarningData.length / rowsPerPage;
    console.log(_c);
    setpaginateNumber(Math.ceil(_c));
    settoMapArray(
      EarningData.slice(
        (currentPage - 1) * rowsPerPage,
        rowsPerPage + (currentPage - 1)
      )
    );
  }, [rowsPerPage]);
  const handleChange = (event, value) => {
    console.log(value);
    // settoMapArray(data.slice((value - 1) * rowsPerPage, rowsPerPage + (value - 1)))
    settoMapArray(
      EarningData.slice((value - 1) * rowsPerPage, rowsPerPage * value)
    );
    setcurrentPage(value);
  };
  const handleRowsChange = (e) => {
    setrowsPerPage(e.target.value);
  };
  return (
    <div className="space-y-4 mt-4">
      <Header>
        <HeaderLeft>
          <h4 className="text-3xl text-blue-900 font-bold">Top 5 Orders</h4>
        </HeaderLeft>
      </Header>
      <TableCont>
        <div className="flex items-center px-4">
          <div className="flex-1 justify-start flex items-center">
            <Checkbox
              color="primary"
              size="small"
              checked={checkedState}
              onChange={() => setcheckedState(!checkedState)}
            />
            <span className="lg:text-xl font-semibold text-xs">
              Order <span className="hidden md:inline">By</span>
            </span>
          </div>
          <div className="flex-1 justify-center flex items-center]">
            <span className="lg:text-xl font-semibold text-xs">Status</span>
          </div>
          <div className="flex-1 justify-center flex items-center">
            <span className="lg:text-xl font-semibold text-xs">
              Payment / Status
            </span>
          </div>
          <div className="flex-1 justify-center flex items-center">
            <span className="lg:text-xl font-semibold text-xs">Order Date</span>
          </div>
          <div className="lg:text-xl hidden flex-1 justify-center xl:flex items-center text-xs"></div>
        </div>
        {toMapArray?.map((val, index) => (
          <MyTableRow
            key={index}
            name={val.name}
            dilivered={val.dilivered}
            payment={val.payment}
            date={val.date}
          />
        ))}
      </TableCont>
      <div className="flex items-center justify-between">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Rows per page
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={rowsPerPage}
            onChange={handleRowsChange}
            label="rows"
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <Pagination
          onChange={handleChange}
          count={paginateNumber}
          color="primary"
        />
      </div>
    </div>
  );
};
const SearCont = styled.div`
  ${tw`flex items-center border shadow pl-2 space-x-2
rounded
`}
`;
const HeaderRight = styled.div`
  ${tw`flex-1 flex items-center justify-end gap-x-3`}
`;
const HeaderLeft = styled.div`
  ${tw`flex-1 flex items-center`}
`;
const Header = styled.div`
  ${tw`flex items-center `}
  @media only screen and (max-width: 451px) {
    flex-direction: column;
  }
`;
const TableCont = styled.div`
  ${tw`h-[350px] overflow-y-auto`}
`;
export default MyTable;
