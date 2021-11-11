import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {

	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";

import { Button, Grid } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddService from '../../addService/AddService';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import Home from '../../Home/Home/Home';
import Myorders from '../../MyOrders/Myorders';
import Payment from '../Payment/Payment';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Review from '../Review/Review';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	let { path, url } = useRouteMatch();
	const { admin, logout } = useAuth();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			{!admin && <Box style={{ textAlign: "start" }}>


				<Link to={`${url}`} ><Button color="inherit">Check My Orders</Button></Link>
				<Link to={`${url}/payment`} ><Button color="inherit"> Payment</Button></Link>
				<Link to={`${url}/review`} ><Button color="inherit"> Review</Button></Link>

			</Box>}
			{admin && <Box style={{ textAlign: "start" }} >
				<Link to={`${url}`} ><Button color="inherit">Manage All Orders</Button></Link>
				<Link to={`${url}/manageAllProducts`} ><Button color="inherit">Manage Products</Button></Link>
				<Link to={`${url}/addservice`} ><Button color="inherit">Add a Product</Button></Link>
				<Link to={`${url}/makeAdmin`} ><Button color="inherit">Make Admin</Button></Link>
			</Box>}

			<Link to="/home" ><Button color="inherit">Go Back Home</Button></Link>
			<p className="nav-link active fs-6 fw-bolder hover-link text-warning " onClick={logout}>Logout</p>
			<br />


		</div >
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography sx={{ my: 3 }} variant="h6" noWrap component="div">
						Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar />

				<Switch>

					<Route exact path={path}>
						<DashboardHome></DashboardHome>
					</Route>

					<PrivateRoute exact path={`${path}/myorders`}>
						<Myorders></Myorders>
					</PrivateRoute>
					<PrivateRoute exact path={`${path}/review`}>
						<Review></Review>
					</PrivateRoute>

					<Route exact path={`${path}/payment`}>
						<Payment></Payment>
					</Route>

					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin></MakeAdmin>
					</AdminRoute>
					<AdminRoute path={`${path}/addservice`}>
						<AddService></AddService>
					</AdminRoute>
					<AdminRoute path={`${path}/addDoctor`}>
						<AddDoctor></AddDoctor>
					</AdminRoute>
					<AdminRoute path={`${path}/manageAllProducts`}>
						<ManageAllProducts></ManageAllProducts>
					</AdminRoute>
					{/* <Route exact path={`${path}/home`}>
						<Home></Home>
					</Route> */}
				</Switch>


			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;
