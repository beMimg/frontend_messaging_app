import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../../utils/API_DOMAIN";
import { Outlet, useNavigate } from "react-router-dom";

export default function ExplorePage() {
  return (
    <div className="flex h-full w-full flex-col  gap-5">
      <h1 className="bg-gray-100 p-3 py-5 text-lg font-semibold dark:bg-neutral-800">
        People
      </h1>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
}
