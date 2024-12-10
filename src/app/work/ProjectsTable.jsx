import Link from "next/link";

const ProjectsTable = () => {
  return (
    <section className="section">
      <div className="container">
        <h4 className="heading mb-10">Other Noteworthy Projects</h4>

        <div className="relative overflow-x-auto">
          <table className="w-full text-left rtl:text-right projects-table">
            <thead>
              <tr>
                <th scope="col" width="100px">
                  Year
                </th>
                <th scope="col" width="300px">
                  Project
                </th>
                <th scope="col" width="300px">
                  Built With
                </th>
                <th scope="col" width="150px">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024</td>
                <th scope="row">Portfolio V4</th>
                <td>
                  <span>Next JS</span>
                </td>
                <td>
                  <Link href="/work">View</Link>
                </td>
              </tr>
              <tr>
                <td>2024</td>
                <th scope="row">Story App</th>
                <td>
                  <span>MERN</span>
                </td>
                <td>
                  <Link href="/work">View</Link>
                </td>
              </tr>
              <tr>
                <td>2021</td>
                <th scope="row">Portfolio V3</th>
                <td>
                  <span>React JS</span>
                  <span>Scss</span>
                </td>
                <td>
                  <Link href="/work">View</Link>
                </td>
              </tr>
              <tr>
                <td>2020</td>
                <th scope="row">Portfolio V2</th>
                <td>
                  <span>Next JS</span>
                </td>
                <td>
                  <Link href="/work">View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTable;
