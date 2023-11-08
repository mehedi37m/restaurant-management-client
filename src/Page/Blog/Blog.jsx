import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className=" h-screen md:h-[80vh] ">
      <Helmet>
                <title>CZNBURAK || Blog</title>
            </Helmet>
     <div className="space-y-5 px-5 md:px-0 pt-20">
     <div className="collapse collapse-plus bg-base-200 ">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          what is one-way data binding?
        </div>
        <div className="collapse-content">
          <p>
            One-way data binding is a concept in web development and user
            interface design that describes the flow of data from a data source
            (such as a model or a database) to a user interface element (such as
            a view or a component) in a unidirectional manner. In one-way data
            binding, changes in the data source are reflected in the user
            interface, but not vice versa. This means that when the data
            changes, the UI is updated to reflect those changes, but changes
            made in the UI do not update the data source.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is NPM in node.js?
        </div>
        <div className="collapse-content">
          <p>
            NPM stands for "Node Package Manager," and it is a package manager
            and dependency management tool for Node.js applications. NPM is the
            default package manager that comes with Node.js, and it is used to
            install, manage, and distribute packages (libraries and modules) for
            Node.js projects.
            <br />
            Package Management: NPM allows you to easily install, update, and
            remove packages (also known as modules or libraries) in your Node.js
            projects. These packages can be either specific libraries that you
            want to use in your application or tools that help you with tasks
            like build automation, testing, and more.
            <br />
            Dependency Resolution: NPM also manages package dependencies. When
            you install a package, NPM will automatically fetch and install any
            other packages that the target package depends on. This dependency
            resolution simplifies the process of ensuring that your project has
            all the necessary components.
            <br />
            Package Publishing: Developers can publish their own Node.js
            packages to the NPM registry, making them available to other
            developers around the world. This encourages code sharing and
            collaboration within the Node.js ecosystem.
            <br />
            Version Control: NPM uses semantic versioning (SemVer) to specify
            and manage package versions. You can specify the version range you
            want for each package in your project's package.json file, allowing
            you to control when and how packages are updated.
            <br />
            Package Scripts: NPM allows you to define and run custom scripts in
            your project's package.json file. These scripts can automate common
            development tasks, such as building, testing, and deploying your
            application.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Different between Mongodb database vs mySQL database?
        </div>
        <div className="collapse-content">
          <p>
            <span className="text-2xl font-bold">Data Model</span>:
            <br />
            MongoDB: MongoDB is a NoSQL database, and it uses a flexible,
            document-oriented data model. It stores data in BSON (Binary JSON)
            format, and documents can have varying structures within the same
            collection. This flexibility allows MongoDB to handle
            semi-structured and unstructured data well.
            <br />
            MySQL: MySQL is a relational database management system (RDBMS). It
            uses a structured, tabular data model, where data is organized into
            tables with rows and columns. The schema for a MySQL database is
            predefined, and data must adhere to this schema.
            <br />
            <span className="text-2xl font-bold">Query Language</span>:
            <br />
            MongoDB: MongoDB uses a query language that is designed for querying
            JSON-like documents. It supports a wide range of queries, including
            complex queries using the aggregation framework. MongoDB also has
            geospatial and full-text search capabilities.
            <br />
            MySQL: MySQL uses SQL (Structured Query Language) for querying data.
            SQL is a powerful language for working with structured data and is
            widely used in the relational database world.
            <br />
            <span className="text-2xl font-bold">Schema </span>:
            <br />
            MongoDB: MongoDB is schema-less, which means that you can change the
            structure of documents within a collection without affecting the
            existing documents. This flexibility is well-suited for agile
            development and handling evolving data.
            <br />
            MySQL: MySQL is schema-based, and the structure of data is defined
            by creating tables with predefined columns. Any changes to the
            schema often require careful consideration and migration steps,
            which can be more rigid.
            <br />
            <span className="text-2xl font-bold">Scaling </span>:
            <br />
            MongoDB: MongoDB is known for its horizontal scalability and can
            easily distribute data across multiple servers or clusters. It is
            well-suited for handling large volumes of data and high-velocity
            workloads.
            <br />
            MySQL: MySQL traditionally relies on vertical scaling by upgrading
            server resources, but it also offers some features for horizontal
            scaling (e.g., replication and clustering). Horizontal scaling in
            MySQL may require more complex setup and management.
            <br />
            <span className="text-2xl font-bold">ACID Compliance </span>:
            <br />
            MongoDB: MongoDB is not ACID-compliant by default, but it provides
            tunable consistency levels. It offers strong consistency, but in
            some cases, it allows for eventual consistency depending on
            configuration.
            <br />
            MySQL: MySQL is typically ACID-compliant, offering strong
            consistency and reliability, making it a good choice for
            applications with transactional requirements.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Blog;
