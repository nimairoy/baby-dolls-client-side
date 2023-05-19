import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
    return (
        <>
            <h2 className="text-4xl mb-12 mt-4 font-bold">Shop By Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Baby Dolls</Tab>
                    <Tab>Cellectible Dolls</Tab>
                    <Tab>Plaing Dolls</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <div className='md:grid md:col-span-4 gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default ReactTabs;