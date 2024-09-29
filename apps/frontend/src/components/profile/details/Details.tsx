import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const Details = (): JSX.Element => {
    const [isEdit, setIsEdit] = useState(false);

    const handleEditClick = (): void => {
        setIsEdit(true);
    };

    const handleSaveClick = (): void => {
        setIsEdit(false);
    };

    if (isEdit) {
        return (
            <>
                <div className="px-4 sm:px-0 ">
                    <div className="flex justify-between">
                        <div className="">
                            <h3 className="text-base font-semibold leading-7 text-gray-900 pt-8">
                                User Details
                            </h3>
                            <p className="mt-0 max-w-2xl text-sm leading-6 text-gray-500">
                                Personal details and application.
                            </p>
                        </div>
                        <div className="pt-10">
                            <button
                                className="border-2 border-slate-500 px-8 py-1 rounded-md text-slate-500 font-bold hover:cursor-pointer"
                                onClick={handleSaveClick}
                                type="button"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Full name
                            </dt>

                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                                <input
                                    className="w-full px-2 py-1 rounded-sm"
                                    value="Sachin Kumar Sharma"
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Application for
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                                <input
                                    className="w-full px-2 py-1 rounded-sm"
                                    value="Backend Developer"
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                                <input
                                    className="w-full px-2 py-1 rounded-sm"
                                    value="margotfoster@example.com"
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Salary expectation
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                                <input
                                    className="w-full px-2 py-1 rounded-sm"
                                    value="$120,000"
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                About
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                                <textarea
                                    className="w-full h-[73px] px-2 py-1 rounded-sm"
                                    value="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."
                                />
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                Attachments
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                                <ul
                                    role="list"
                                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                >
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">
                                                    resume_back_end_developer.pdf
                                                </span>
                                                <span className="flex-shrink-0 text-gray-400">
                                                    2.4mb
                                                </span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href="#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                upload
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">
                                                    coverletter_back_end_developer.pdf
                                                </span>
                                                <span className="flex-shrink-0 text-gray-400">
                                                    4.5mb
                                                </span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href="#"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                upload
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="px-4 sm:px-0 ">
                <div className="flex justify-between">
                    <div className="">
                        <h3 className="text-base font-semibold leading-7 text-gray-900 pt-8">
                            User Details
                        </h3>
                        <p className="mt-0 max-w-2xl text-sm leading-6 text-gray-500">
                            Personal details and application.
                        </p>
                    </div>
                    <div className="pt-10">
                        <button
                            className="border-2 border-slate-500 px-8 py-1 rounded-md text-slate-500 font-bold hover:cursor-pointer"
                            onClick={handleEditClick}
                            type="button"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Full name
                        </dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0 py-1 px-2">
                            Sachin Kumar Sharma
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Application for
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0 py-1 px-2">
                            Backend Developer
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0 py-1 px-2">
                            margotfoster@example.com
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Salary expectation
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0 py-1 px-2">
                            $120,000
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            About
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0 py-1 px-2">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Attachments
                        </dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-1 sm:mt-0 py-1 px-2">
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                            >
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                resume_back_end_developer.pdf
                                            </span>
                                            <span className="flex-shrink-0 text-gray-400">
                                                2.4mb
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                coverletter_back_end_developer.pdf
                                            </span>
                                            <span className="flex-shrink-0 text-gray-400">
                                                4.5mb
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    );
};

export default Details;
