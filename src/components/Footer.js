import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../redux/actions";
import "../styles.css";

const Footer = () => (
  <p>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_SELECTED}>Selected</FilterLink>
  </p>
);

export default Footer;
