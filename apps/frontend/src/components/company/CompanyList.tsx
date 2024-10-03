import React from "react";

const CompanyList = (): JSX.Element => {
    return (
        <div>
            <p>Showing 800 companies</p>
            {/* Card Container for companies*/}
            <div className="border-2 overflow-scroll ">
                <div className="max-h-[700px] py-2 flex flex-wrap justify-start gap-x-[98px] items-stretch">
                    {new Array(10).fill(0).map((item) => (
                        <div className="p-5 shadow-md rounded-lg bg-white my-4 max-h-40 max-w-[340px]">
                            <h2 className="text-xl font-semibold">
                                Company name
                            </h2>
                            <div className=" text-neutral-500">
                                <div className="w-[300px] flex justify-stretch gap-6 my-4 ">
                                    <p className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl">
                                        company type
                                    </p>
                                    <p className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl">
                                        Industry
                                    </p>
                                </div>
                                <div>
                                    <svg
                                        height="12px"
                                        viewBox="0 0 576 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="inline-block pb-1"
                                        fill="#fdaa29"
                                    >
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </svg>{" "}
                                    3.7 | 8 reviews
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[20px]"></div>
        </div>
    );
};

export default CompanyList;
