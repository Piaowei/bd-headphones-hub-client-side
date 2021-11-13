import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { FcHome } from 'react-icons/fc';
import { BiLogOut } from 'react-icons/bi';

import {

	Switch,
	Route,
	Link,
	useRouteMatch,
	NavLink
} from "react-router-dom";

import { Button, Grid } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddService from '../../addService/AddService';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
// import Home from '../../Home/Home/Home';
import Myorders from '../../MyOrders/Myorders';
import Payment from '../Payment/Payment';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Review from '../Review/Review';
import './Dashboard.css'
import { Navbar } from 'react-bootstrap';
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
		<div className="drawer" >
			<Toolbar />
			{/* <Divider /> */}
			{!admin && <Box style={{ textAlign: "start" }}>


				<Link className="nav-link active fs-6 fw-bolder  hover-link5  " to={`${url}`} ><Button className="hover-link5  fw-bold  " color="inherit">Check My Orders</Button></Link>

				<NavLink className="nav-link active fs-6 fw-bolder  hover-link5  " to={`${url}/payment`} ><Button className="hover-link5  fw-bold  " color="inherit"> Payment</Button></NavLink>

				<NavLink className="nav-link active fs-6 fw-bold hover-link5  " to={`${url}/review`} ><Button className="hover-link5  fw-bold " color="inherit"> Review</Button></NavLink>
				<br />

			</Box>}
			{admin && <Box style={{ textAlign: "start" }} >
				<Link className="nav-link active fs-6 fw-bolder hover-link5  " to={`${url}`} ><Button className="hover-link5  fw-bold  " color="inherit">Manage Orders</Button></Link>

				<Link className="nav-link active fs-6 fw-bolder hover-link5  " to={`${url}/manageAllProducts`} ><Button className="hover-link5  fw-bold  " color="inherit">Manage Products</Button ></Link>

				<Link className="nav-link active fs-6 fw-bolder hover-link5  " to={`${url}/addservice`} ><Button className="hover-link5  fw-bold  " color="inherit">Add a Product</Button></Link>

				<Link className="nav-link active fs-6 fw-bolder hover-link5  " to={`${url}/makeAdmin`} ><Button className="hover-link5  fw-bold  " color="inherit">Make Admin</Button></Link>
			</Box>}



			<Box style={{ textAlign: "start" }}>

				<Link className="nav-link active fw-bolder hover-link5  " to="/home" ><Button className="text-warning hover-link5  fw-bold   " color="inherit">  <FcHome size="1.5em" className="me-1" style={{ marginTop: '-7px' }} /> Go Back Home</Button></Link>
				<h6 className="ps-4 nav-link active fs-6  fw-bold  fw-bolder hover-link text-danger hover-link5  " onClick={logout}> <BiLogOut size="1.5em" /> Logout</h6>

			</Box>

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
				<Toolbar className="review-bg" >
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<h3 className="dash" >
						Dashboard
					</h3>
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
					<AdminRoute path={`${path}/manageAllProducts`}>
						<ManageAllProducts></ManageAllProducts>
					</AdminRoute>
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
