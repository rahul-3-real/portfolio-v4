import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Breadcrumb = ({ data }) => {
  return (
    <div className="breadcrumb">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-2">
          {Object.entries(data).map(([label, path]) => (
            <h2 className="breadcrumb-title" key={label}>
              {path === "current" && label}
            </h2>
          ))}
        </div>

        <div className="col-span-3 h-100 flex justify-end items-center">
          <ul className="breadcrumb-menu">
            {Object.entries(data).map(([label, path], index, array) => (
              <li key={label} className="breadcrumb-item">
                {path === "current" ? (
                  <span className="breadcrumb-link active">{label}</span>
                ) : (
                  <Link href={path} className="breadcrumb-link">
                    {label}
                  </Link>
                )}
                {index < array.length - 1 && <BsChevronRight />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
