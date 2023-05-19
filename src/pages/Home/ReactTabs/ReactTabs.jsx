import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
    return (
        <>
            <h2 className="text-4xl mb-12 mt-4 text-center font-bold">Shop By Category</h2>
            <Tabs>
                <TabList>
                    <Tab>Baby Dolls</Tab>
                    <Tab>Cellectible Dolls</Tab>
                    <Tab>Plaing Dolls</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl font-semibold text-center mb-8 mt-8'>Baby Dolls</h2>
                    <div className='md:grid md:col-span-4 gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-secondary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl font-semibold text-center mb-8 mt-8'>Collectible Dolls</h2>
                    <div className='md:grid md:col-span-4 gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-secondary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl font-semibold text-center mb-8 mt-8'>Plaing Dolls</h2>
                    <div className='md:grid md:col-span-4 gap-4'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-secondary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default ReactTabs;