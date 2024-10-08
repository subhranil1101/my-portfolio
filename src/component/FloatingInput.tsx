
const FloatingInput = (props: any) => {
      return (
            <div>

                  <div className="relative">
                        {props.id !== 'message' ? <input type="text" id={props.id} value={props.value} onChange={(e) => props.handleChange(props.id, e.target.value)} className={`block px-2.5 pb-2.5 pt-4 w-full text-xl md-mx:text-base xs-mx:text-sm text-white bg-transparent rounded-3xl border border-white appearance-none  focus:outline-none focus:ring-0 ${props.error?'border-red-500':''} focus:border-primaryColor peer hover:shadow-[0_0_3px_0_#64FFDA]`} placeholder="" />
                              : <textarea name={props.id} id={props.id} value={props.value} rows={2} onChange={(e) => props.handleChange(props.id, e.target.value)} className={` block px-2.5 pb-2.5 pt-4 w-full text-xl md-mx:text-base xs-mx:text-sm text-white bg-transparent rounded-3xl border border-white appearance-none  focus:outline-none focus:ring-0 ${props.error?'border-red-500':''} focus:border-primaryColor peer hover:shadow-[0_0_3px_0_#64FFDA]`} placeholder="" ></textarea>
                        }
                        <label htmlFor={props.id} className="cursor-text absolute text-xl bs-mx:text-lg xs-mx:text-xs xs-mx:text-balance xs-mx: text-textColor  duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{props.name}</label>
                  </div>
                  {props.error && <div className="text-red-500 font-mono pl-2 pt-1 font-thin">{props.error}</div>}
            </div>
      )
}

export default FloatingInput
