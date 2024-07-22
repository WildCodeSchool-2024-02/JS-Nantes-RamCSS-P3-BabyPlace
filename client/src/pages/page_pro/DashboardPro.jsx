import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination } from "@nextui-org/pagination";
// import { Navigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useCallback, useMemo, useState } from "react";
// import { useEffect } from "react";
import { columns, users } from "../../../data";

import DeleteIcon from "../../assets/nextUI/DeleteIcon";
import EditIcon from "../../assets/nextUI/EditIcon";
import EyeIcon from "../../assets/nextUI/EyeIcon";

import NavbarPro from "../../components/components_pro/NavbarPro";

import "../styles_pro_pages/DashboardPro.css";

const statusColorMap = {
  validée: "success",
  refusée: "danger",
  "En attente": "warning",
  annulée: "default",
};

function DashboardPro() {
  //* Calcul de la table servant à la réservation
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, rowsPerPage]);

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "md", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-lg capitalize">{cellValue}</p>
            <p className="text-bold text-lg capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="lg"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Détail">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-100">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Supprimer la réservation">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  //   //* Blocage de la page en cas de non connexion

  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("token");
  //   if (loggedInUser) {
  // setAuthenticated(loggedInUser);
  // }
  // }, []);

  // if (!authenticated) {
  //   console.log('FJFJFJFJF', authenticated);
  //   return <Navigate replace to="/pro/connexion" />;
  // } else {

  return (
    <section className="dashboard-page-container">
      <NavbarPro />
      <section className="dashboard-component-container">
        <section className="dashboard-component-user-info">
          <section className="card-user-decorations">
            <img
              src="../src/assets/images/illustration/decore-left.svg"
              alt="décorations"
            />
            <img
              src="../src/assets/images/illustration/decore-right.svg"
              alt="décorations"
            />
          </section>
          <img
            className="card-user-image"
            src="../src/assets/images/illustration/badge_user.png"
            alt="badge"
          />
          <p className="texts card-user-title">
            Bienvenue <strong>NOM DE LA STRUCTURE</strong>
          </p>
          <p className="texts card-user-annonces">
            Annonce BABYPLACE // Annonce BABYPLACE // Annonce BABYPLACE
          </p>
        </section>
        <section className="dashboard-component-graph-subscribers">
          <img
            className="subscribers-charts"
            src="../src/assets/images/illustration/Subscribers_Card.png"
            alt="graphique sur le nombre de réservations"
          />
        </section>
        <section className="dashboard-component-graph-buisness">
          <img
            className="buisness-charts"
            src="../src/assets/images/illustration/Buisness_Card.png"
            alt="graphique sur le chiffre d'affaire"
          />
        </section>
        <section className="dashboard-component-table">
          <Table
            aria-label="Example table with custom cells"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={setPage}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item?.name}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </section>
      </section>
    </section>
  );
}
// }

export default DashboardPro;
