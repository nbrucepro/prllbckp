import React from 'react'

const InvoiceTemplate = () => {
  return (
    <div className="w-100 align-middle items-center mx-auto bg-gradient-to-b from-orange-600 to-orange-700">
    <section className="py-20 overflow-hidden relative print:py-0">
        <div className="inline-block absolute 2xl:end-60 bottom-3 xl:bottom-auto z-10">
            <a href="javascript:window.print()" className="flex items-center justify-end py-2 px-7 rounded-md print:p-0 bg-white print:hidden">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="pe-3">
                        <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                </span>
                Print
            </a>
        </div>

        <div className="container">
            <div className="shadow-2xl print:shadow-none">
                <div className="bg-white rounded-t-3xl md:p-20 p-10 print:p-0">
                    <div>
                        <img src="assets/images/logo-dark.png" alt="img"/>
                    </div>

                    <div className="flex flex-wrap justify-between gap-6 mt-14">
                        <div>
                            <h2 className="text-xl font-medium mb-4">Client Name</h2>
                            <p className="text-base font-normal">Date hsued: <span className="font-medium">04 May 56</span></p>
                            <p className="text-base font-normal">Invoiced Nex: <span className="font-medium">12345</span></p>
                        </div>

                        <div>
                            <p className="text-base font-normal">Your Name</p>
                            <p className="text-base font-normal">Your Address</p>
                            <p className="text-base font-normal">Town, City,</p>
                            <p className="text-base font-normal">Postcode</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="border-collapse table-auto w-full text-sm mt-14 whitespace-pre">
                            <thead>
                                <tr className="text-end">
                                    <th className="p-5 pt-0 ps-0 pb-3 border-b uppercase font-medium text-start text-slate-500">Description</th>
                                    <th className="p-5 pe-7 pt-0 pb-3 border-b uppercase font-medium  text-slate-500">Rate</th>
                                    <th className="p-5  pt-0 pb-3 border-b uppercase font-medium text-slate-500">Hours</th>
                                    <th className="p-5 pe-0 pt-0 pb-3 border-b uppercase font-medium text-slate-500">Subtotae</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="text-end">
                                    <td className="p-5 ps-0 text-lg font-medium text-start text-slate-900">Wedsite design</td>
                                    <td className="p-5 text-lg font-medium text-slate-900">$12.34</td>
                                    <td className="p-5 pe-8 text-lg font-medium text-slate-900">100</td>
                                    <td className="text-lg font-medium  text-orange-600">$1234.00</td>
                                </tr>
                                <tr className="text-end">
                                    <td className="p-5 ps-0 text-lg font-medium text-start text-slate-900">Logo design</td>
                                    <td className="p-5 text-lg font-medium text-slate-900">$12.34</td>
                                    <td className="p-5 pe-8 text-lg font-medium text-slate-900">100</td>
                                    <td className="text-lg font-medium  text-orange-600">$1234.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-gray-200 rounded-b-3xl md:p-20 p-10">
                    <div className="overflow-x-auto">
                        <table className="border-collapse table-auto w-full text-sm whitespace-pre">
                            <thead>
                                <tr>
                                    <th className="p-5 pb-2 ps-0 border-b uppercase font-medium text-start border-gray-300 text-slate-500">Bank info</th>
                                    <th className="p-5 pb-2 border-b uppercase font-medium text-start border-gray-300 text-slate-500">Oue by</th>
                                    <th className="p-5 pb-2 pe-0 border-b uppercase font-medium text-end border-gray-300 text-slate-500">Total oue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-5 ps-0 text-base font-normal text-start text-slate-900">Acoosnt Nex <span className="font-semibold">123 456 78</span></td>
                                    <td row-span="2" className="p-5 text-2xl font-medium text-slate-900">18 May 16</td>
                                    <td row-span="2" className="p-5 pe-0 text-2xl font-medium text-end text-orange-600">$2468.00</td>
                                </tr>
                                <tr className="p-5 ps-0 border-gray-300">
                                    <td className="pb-7 text-base font-normal text-start text-slate-900">Soct code: <span className="font-semibold">01 23 45</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center gap-3 mt-12">
                        <span>&#128151</span>
                        <h3 className="text-xl font-medium">Thank you!</h3>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default InvoiceTemplate