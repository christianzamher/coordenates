import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
      <div className="font-nunito">
        {/* Encabezado */}

  
        {/* Contenido principal */}
        <main>
          {children}
        </main>
  
        {/* Pie de página */}
       
      </div>
    );

    
  };

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Layout;
