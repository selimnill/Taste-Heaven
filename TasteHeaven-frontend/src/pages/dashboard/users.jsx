import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import DashTable from "@/components/Dashboard/DashTable";
import UserRow from "@/components/Dashboard/rows/UserRow";
const headerCells = ["", "Name", "Email", "Role", "Delete"];

const AllUsersPage = () => {
	const axiosSecure = useAxiosSecure();

	const {
		data: users = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

	return (
		<>
			<Helmet>
				<title>Taste Heaven | All Users</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Manage All Users'
					component='h1'
					smallTitle='How many?'
				/>
			</Box>

			<DashTable
				headerCells={headerCells}
				isLoading={isLoading}
				summary={
					<Typography
						component='h3'
						fontFamily='"Cinzel Variable", sans-serif'
						fontWeight={700}
						variant='h5'>
						Total Users: {users.length}
					</Typography>
				}
				tableName='all users'>
				<UserRow refetch={refetch} users={users.toReversed()} />
			</DashTable>
		</>
	);
};

export default AllUsersPage;
