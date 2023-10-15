import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import referralApi from "../../apis/referral";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "moment";

const List = ({ setIsLoggedIn }) => {
  const [referrals, setReferrals] = useState([]);
  const [referralToInvite, setReferralToInvite] = useState("");

  useEffect(() => {
    fetchReferrals();
  }, []);

  const fetchReferrals = async () => {
    const res = await referralApi.index();
    setReferrals(res.data);
  };

  const handleInvite = async () => {
    try {
      const res = await referralApi.create({ email: referralToInvite });
      setReferralToInvite("");
      fetchReferrals();
      toast.success("Referral Invited!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("Please enter valid and unique email!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <React.Fragment>
      <Box display="flex" width={"100%"} height={80}>
        <Box m="auto">
          <TextField
            inputProps={{ size: 40 }}
            id="referralEmail"
            value={referralToInvite}
            placeholder="Email"
            onChange={(event) => setReferralToInvite(event.target.value)}
          />
          <Button
            color="inherit"
            onClick={handleInvite}
            variant="contained"
            sx={{ ml: 10 }}
            disabled={!referralToInvite}
          >
            Invite Referral
          </Button>
        </Box>
      </Box>
      <Box display="flex" width={"100%"} height={80}>
        <Box m="auto" sx={{ fontWeight: "bold" }}>
          Invited Referrals
        </Box>
      </Box>

      <Box display="flex" width={"100%"} height={80}>
        <Box m="auto">
          <TableContainer component={Paper} style={{ width: 500 }}>
            <Table style={{ width: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>Invited at</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Improvement: Add pagination */}
                {referrals.map((referral) => (
                  <TableRow id={referral.id}>
                    <TableCell>{referral.email}</TableCell>
                    <TableCell>
                      {Moment(referral.created_at).format(
                        "DD MMM YY, HH:MM:SS"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <ToastContainer />
    </React.Fragment>
  );
};

export default List;
