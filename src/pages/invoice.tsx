import React from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import { ReactElement } from 'react';
import { Field, Form, Formik } from 'formik';
import { mdiAsterisk, mdiFormTextboxPassword } from '@mdi/js';

const Invoice = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-semibold mb-6">Create Invoice</h1>
          <Formik
            initialValues={{
              invoice_number: '',
              invoice_date: '',
              client_name: '',
              client_email: '',
              description: '',
              amount: '',
              currency: 'USD', // Set the default currency value
            }}
            onSubmit={(values) => {
              // Handle form submission here
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="invoice-number" className="block text-sm font-medium text-gray-700 mb-2">
                      Invoice Number
                    </label>
                    <Field
                      id="invoice-number"
                      type="text"
                      name="invoice_number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="invoice-date" className="block text-sm font-medium text-gray-700 mb-2">
                      Invoice Date
                    </label>
                    <Field
                      id="invoice-date"
                      type="date"
                      name="invoice_date"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="client-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Client Name
                    </label>
                    <Field
                      id="client-name"
                      type="text"
                      name="client_name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="client-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Client Email
                    </label>
                    <Field
                      id="client-email"
                      type="email"
                      name="client_email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      rows="3"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <Field
                      id="amount"
                      type="number"
                      step="0.01"
                      name="amount"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>
                    <Field
                      as="select"
                      id="currency"
                      name="currency"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                      required
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      {/* Add more currency options as needed */}
                    </Field>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Create Invoice
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      {/* Preview Summary */}
      <section className="max-w-6xl mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Preview Summary</h2>
          <div>
            <p className="text-sm text-gray-600 mb-2">Invoice Number: </p>
            <p className="text-sm text-gray-600 mb-2">Invoice Date: </p>
            <p className="text-sm text-gray-600 mb-2">Client Name: </p>
            <p className="text-sm text-gray-600 mb-2">Client Email: </p>
            <p className="text-sm text-gray-600 mb-2">Description: </p>
            <p className="text-sm text-gray-600 mb-2">Amount: </p>
            <p className="text-sm text-gray-600 mb-2">Currency: </p>
          </div>
        </div>
      </section>
    </>
  );
};

Invoice.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Invoice;
