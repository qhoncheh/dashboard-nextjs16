import AccountToggle from "./account-toggle"

const Sidebar = () => {
  return (
    <div className="bg-gray-100  h-full">
        <div className="overflow-y-scroll top-4 h-[calc(100vh-32px-48px)] sticky ">
            <AccountToggle />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Sidebar