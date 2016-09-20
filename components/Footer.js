import React from 'react';
import FilterLink from '../containers/FilterLink';

class Footer extends React.Component{
    render(){
        return(
            <p>
              Show: {" "}
              <FIlterLink filter='SHOW_ALL'>
                ALL
              </FilterLink>
              {", "}
              <FIlterLink filter='SHOW_ACTIVE'>
                Active
              </FilterLink>
              {", "}
              <FIlterLink filter='SHOW_COMPLETED'>
                Completed
              </FilterLink>
            </p>
        );
    }
}


export default Footer;
