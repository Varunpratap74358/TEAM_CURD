import { useState } from "react"


const FORM = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<number>();
    const [address, setAddress] = useState<string>('');

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(name, email, phone, address)
        } catch (error) {
            console.log(error)
            alert("Somthin went wrong to submit form")
        }
    }
    return (
        <div className="flex justify-center pt-10">
            <div className="border w-[90%] md:w-[60%] py-4 px-2 rounded-md shadow-md shadow-slate-500">
                <form onSubmit={handelSubmit} action="" className="flex flex-col gap-7 px-5">
                    <h1 className="font-bold text-3xl text-center">Informaton</h1>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-semibold">Name</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 bg-transparent outline-none px-1" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-semibold">Email</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="border-b-2 bg-transparent outline-none px-1" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-semibold">Phone</label>
                        <input type="number" required value={phone} onChange={(e) => setPhone(Number(e.target.value))} className="border-b-2 bg-transparent outline-none px-1" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm font-semibold">Address</label>
                        <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} className="border-b-2 bg-transparent outline-none px-1" />
                    </div>
                    <button type="submit" className="bg-blue-500 rounded py-2 hover:bg-blue-400 transition-all duration-300">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FORM
