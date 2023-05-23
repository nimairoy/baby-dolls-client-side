import React from 'react';
import sidebar from '../../../src/assets/sidebar-island.png'
import { Link } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const Blogs = () => {
    useSetTitle('Blogs')
    return (
        <div className='my-container md:grid md:grid-cols-4 py-8 px-2 gap-5'>
            <div className='col-span-3 text-justify p-4'>
                <h2 className="text-2xl md:text-4xl my-4">
                    1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <p>
                    <strong>Access Token:</strong> An access token is a credential that is used to access protected resources on behalf of a user or an application. It is typically a string of characters that represents the authorization granted to the token holder. Access tokens have a limited lifespan and usually expire after a certain period of time, known as the token's expiration time.
                    When a user or an application wants to access a protected resource, it presents the access token to the server. The server verifies the token's authenticity and checks if the token is still valid and not expired. If the token is valid, the server grants access to the requested resource. Access tokens are often used in stateless authentication systems like OAuth 2.0.
                </p>
                <p>
                    <strong>Refresh Token:</strong> A refresh token is a credential that is used to obtain a new access token when the original access token has expired. Unlike access tokens, refresh tokens are long-lived and are typically valid for a longer period of time. When an access token expires, the client can present the refresh token to the server to obtain a new access token without requiring the user to reauthenticate.
                </p>
                <p className='mt-4'>
                    As for where to store these tokens on the client-side, it depends on the security requirements and the type of client you are working with:
                    Cookies: In web applications, access tokens and refresh tokens are often stored as HTTP-only cookies. These cookies are sent automatically by the client's browser with each request to the server. Storing tokens in cookies provides a level of protection against cross-site scripting (XSS) attacks.
                    Local Storage/Session Storage: Access tokens can be stored in the client's browser storage, such as local storage or session storage. However, storing tokens in these locations makes them susceptible to cross-site scripting attacks. Therefore, it's crucial to implement proper security measures, such as validating the token's integrity and using other security mechanisms like Content Security Policy (CSP).
                    In-Memory Storage: In some cases, access tokens can be stored in memory on the client-side. However, this approach is less secure as the tokens can be easily accessed by malicious scripts or other vulnerabilities.
                </p>
                <h2 className="text-2xl md:text-4xl my-4">
                    2. Compare SQL and NO-SQL Database ?
                </h2>
                <p>
                    <strong>SQL Database: </strong>
                    SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                </p>
                <p className='mt-4'>
                    <strong>NoSQL Database: </strong>
                    A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </p>
                <h2 className="text-2xl md:text-4xl my-4">
                    3. What is express js? What is Nest JS ?
                </h2>
                <p>
                    <strong>Express JS: </strong>
                    Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.
                </p>
                <p className='mt-4'>
                    <strong>NestJS: </strong>
                    NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.
                </p>
                <h2 className="text-2xl md:text-4xl my-4">
                    4. What is MongoDB aggregate and how does it work ?
                </h2>
                <p>
                    <strong>Aggregation </strong>
                    is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.
                    While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.
                    There are what are called single purpose methods like estimatedDocumentCount(),  count(), and distinct() which are appended to a find() query making them quick to use but limited in scope.
                    The map-reduce framework on MongoDB is a predecessor of the aggregation framework and much more complex to use. MongoDB have deprecated.
                </p>
                <p className='mt-4'>
                    <strong>How it work: </strong>
                    When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline (here’s a more detailed tutorial). Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.
                    Before we dive into the code, let's understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a "stage." For each stage that's defined, MongoDB executes them one after another in order to give a finalized output you're able to use.
                </p>
            </div>


            {/* // sidebar  */}
            <div>
                <div className='bg-blue-600 pb-5'>
                    <div className="p-4">
                        <p className=' text-white mt-4'>Free Course</p>
                        <h4 className="text-xl text-white mt-4">4 Essential Tips to speed up your React Knowledge</h4>
                    </div>
                    <div style={{ marginRight: '-30px' }}>
                        <img src={sidebar} alt="" />
                        <button className='btn btn-secondary ml-4 mt-6'>Download Free Guide</button>
                    </div>
                </div>
                <h2 className="text-2xl mt-6 mb-3">Search Blogs</h2>
                <input type="search" className='input input-primary' name="search" placeholder='Type Here..' id="" />
                <h2 className="text-2xl mt-6 mb-3">Latest Posts: </h2>
                <Link>ChatGPT vs Google BARD: A Comparison for the...</Link>
            </div>
        </div>
    );
};

export default Blogs;