import React from "react";

const Blog = () => {
    return( 
        <section className="max-w-4xl mx-auto px-4 pb-5 justify-center flex flex-col items-start md:items-center" >
            <h1 className="text-2xl pb-14">Blog & Notes</h1>
            <div className="flex flex-col gap-8">
                <div className="">
                    <h1 className="font-semibold" >Uyku ve Rızık</h1>
                    <p className="text-gray-400" >Gerçekten başarının şifresi erken uyanmak olabilir mi?</p>
                    <div className="flex gap-2 text-gray-400 text-sm">
                        <div className="">15 Nisan 2023</div>
                        <div className="">.</div>
                        <div className="">1500 Views</div>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold" >Uyku ve Rızık</h1>
                    <p className="text-gray-400" >Gerçekten başarının şifresi erken uyanmak olabilir mi?</p>
                    <div className="flex gap-2 text-gray-400 text-sm">
                        <div className="">15 Nisan 2023</div>
                        <div className="">.</div>
                        <div className="">1500 Views</div>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold" >Uyku ve Rızık</h1>
                    <p className="text-gray-400" >Gerçekten başarının şifresi erken uyanmak olabilir mi?</p>
                    <div className="flex gap-2 text-gray-400 text-sm">
                        <div className="">15 Nisan 2023</div>
                        <div className="">.</div>
                        <div className="">1500 Views</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
