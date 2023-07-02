<h1 align="center">
  🎯 Shop using Hexagonal Architecture and DDD in Typescript 🎯
</h1>

# Build and Run

A make file has been provided to install the dependencies and run the app.

## Current deploy: <https://td-shop.onrender.com/>

The project can be found here [Get Request](https://td-shop.onrender.com/v1/customers)

## Assumptions

In the development of this TypeScript file, the following assumptions were made:

1. ULIDs (Universally Unique Lexicographically Sortable Identifiers) are
   generated directly from external lib and are used as main ID type for the
   entities.

2. Lack of observability tools like Prometheus: The system does not include
   observability tools such as Prometheus or similar frameworks for monitoring
   and metrics gathering. Monitoring and metrics functionalities are not
   implemented due to project constraints or other limitations.

3. No use of Joi for field sanitization: Due to time limitations or other
   factors, the use of Joi or similar libraries for field sanitization and
   validation has not been implemented. The responsibility for ensuring the
   correctness and sanitization of input fields lies with the calling
   encapsulated in each domain using Object Values.

4. Communication between modules: The repository is shared among modules: To
   facilitate data access and consistency, the repository is shared among
   different modules within the system. The modules interact with the shared
   repository to perform data operations and maintain data integrity. However,
   direct sharing of service objects or dependencies between modules is not
   recommended.

5. No CQRS (Command Query Responsibility Segregation): The system does not
   follow the CQRS pattern, where separate models are used for commands and
   queries. On the other hand, a read model approach is employed, which
   focuses on optimizing the retrieval and presentation of data.

6. Node version requirement: The codebase requires Node.js version 16.14.2 or
   higher to ensure compatibility and take advantage of the latest features and
   improvements available in the Node.js runtime.
  
7. For time limitations the database used is in memory, therefore a
   docker-compose file or similar is not expected to run the infrastructure.

8. The code leaves inside src folder. Test leave outisde therefore we dont have
   to compile.
  
9. A postman collection has been suplied at root directory, that could be useful
   when checking the app.

Please keep these assumptions in mind while working with the code and ensure
that they align with your project requirements and objectives.

## Usage

Include instructions or code snippets here to help users understand how to use
the TypeScript file effectively.
