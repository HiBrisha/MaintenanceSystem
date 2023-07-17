/*================****==================
Title: Home Page
Author: Hieu Nguyen Minh
Desc: Render Home Page
================****==================*/

/*================import library==================*/
import "../assets/styles/p_home.css";
import { FolderTree } from "../component/folder_tree";
/*================****==================*/

export const Home = () => {
    return (
        <div id="main" className="row main-container m-0">
            <section className="col-lg-3 folder-tree p-0 m-0">
                <FolderTree />
            </section>
            <div className="col-lg-4"></div>
        </div>
    );
};
