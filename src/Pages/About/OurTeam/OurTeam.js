import React from 'react';

const OurTeam = () => {
    return (
        <>
            <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
                <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">Meet Our Team</h1>
                <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/g3N0tn4/273000758-475261434228117-5832663628739063727-n.jpg" className="h-52 w-52 object-cover object-center rounded-full mx-auto" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Ashraful Islam</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Senior Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/pPkX4Bs/1627408954787.jpg" className="h-52 w-52 object-cover object-center rounded-full mx-auto" alt="woman in black dress" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Munna Aziz</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Junior Deeveloper</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/qdd4R9T/nahid.jpg" className="h-52 w-52 object-cover object-center rounded-full mx-auto" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">MD.Nahid</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Junior Deeveloper</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;