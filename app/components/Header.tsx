
import { Fragment, useState } from 'react'
import { NavLink } from '@remix-run/react';
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '~/helper'

const navigation = {
  pages: [
    {
      name: 'Home', href: "/"
    },
    {
      name: 'Catalog', href: "/catalog"
     
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}



export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-transparent -mb-24 relative top-0 left-0">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-black bg-opacity-90 shadow-xl pb-12 flex flex-col overflow-y-auto text-white">
              <div className="px-4 py-9 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <NavLink to={page.href} className={({ isActive}) => classNames("-m-2 p-2 block font-medium text-white", isActive ? "text-blue-400 underline" :"")}>
                      {page.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Main navigation */}
          <div className="bg-transparent">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-500">
                <div className="h-24 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center ">
                    <NavLink to="/" className="bg-slate-100 rounded-full">
                      <span className="sr-only">DiemQuynhSeafoods</span>
                      <img
                        className="h-14  w-auto"
                        src="/DIQ_logo.png"
                        alt="logo"
                      />
                    </NavLink>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.pages.map((page) => (
                          <NavLink
                            key={page.name}
                            to={page.href}
                            className={({ isActive }) => classNames("flex items-center text-sm font-medium text-white  hover:text-blue-400", isActive ? "text-blue-400" : "")}
                          >
                            {page.name}
                          </NavLink>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden z-20">
                    <button
                      type="button"
                      className={classNames("-ml-2  p-2 rounded-md text-white", open ? "hidden" : "")}
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                  </div>

                  {/* Logo (lg-) */}
                  <NavLink to="/" className="lg:hidden bg-white rounded-full">
                    <span className="sr-only">DiemQuynhSeafoods</span>
                    <img
                      src="/DIQ_logo.png"
                      alt="logo"
                      className="h-14 w-auto"
                    />
                  </NavLink>

                  <div className="flex-1 flex items-center justify-end"/>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
