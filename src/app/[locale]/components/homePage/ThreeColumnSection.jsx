import React from "react";

const ThreeColumnSection = () => {
    return (
        <section className=" py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3 border-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-sm text-gray-700 mt-8">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
                        </p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                            odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                            nulla facilisi.
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Lorem ipsum dolor sit</strong> amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                            vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                            augue duis dolore te feugait nulla facilisi.
                        </p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Lorem ipsum dolor sit</strong> amet, consectetur adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                            vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                            vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                            augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeColumnSection;
