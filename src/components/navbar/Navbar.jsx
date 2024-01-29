import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Priyanka Ganesan
        </motion.span>
        <div className="social">
          <a href="https://medium.com/@gpriyankapms">
            <img src="/medium.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/priyanka-ganesan/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Priyanka-ganesan-15">
            <img src="/github.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
