const Nav = () => {
return (
    <div className="w-screen h-16 border-white border-b justify-between flex items-center px-20 fixed top-0 right-0 left-0">
        <div className="flex justify-between items-center">
            <p className="hover:text-pink-500 cursor-pointer duration-300">Submit a site</p>
            <p className="ml-4 hover:text-pink-500 cursor-pointer duration-300">Lapa ninja</p>
        </div>
        <div>
            <h2 className="hover:text-pink-500 cursor-pointer duration-300">Flowing Page</h2>
        </div>
        <div className="flex justify-around items-center">
            <p className="hover:text-pink-500 cursor-pointer duration-300">Instagram</p>
            <p className="ml-4 hover:text-pink-500 cursor-pointer duration-300">Pinterest</p>
            <p className="ml-4 hover:text-pink-500 cursor-pointer duration-300">Twitter</p>
        </div>
    </div>
)
}

export default Nav