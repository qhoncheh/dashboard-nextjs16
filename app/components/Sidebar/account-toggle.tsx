

const AccountToggle = () => {
  return (
  <>
      <div className="border-b border-stone-300 mb-4 mt-2 pb-4">
        <button className="text-left p-0.5 hover:bg-stone-200 rounded items-center w-full cursor-pointer gap-2 relative transition-colors"> 
        <img src="https://api.dicebear.com/9.x/notionists/svg" alt="Avatar" className="shadow size-8 bg-violet-500 rounded shrink-0" width={8} height={8}/>
        </button>
    </div>
    <div className="text-start">
        <span className="text-sm font-bold block"></span>
        
    </div> 
    </>
  ) 
 

}

export default AccountToggle