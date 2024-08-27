import React from 'react'

type Props = {}

const Tile = (props: Props) => {
    return (<div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                NEW USERS
                            </h5>
                            <span className="font-bold text-xl">2,356</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                SALES
                            </h5>
                            <span className="font-bold text-xl">924</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                PERFORMANCE
                            </h5>
                            <span className="font-bold text-xl">49,65%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default Tile