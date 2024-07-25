import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { Pagination } from "@nextui-org/pagination";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useCallback, useEffect, useMemo, useState } from "react";
import DeleteIcon from "../../assets/nextUI/DeleteIcon";
import EditIcon from "../../assets/nextUI/EditIcon";
import EyeIcon from "../../assets/nextUI/EyeIcon";

import NavbarPro from "../../components/components_pro/NavbarPro";
import "../styles_pro_pages/DashboardPro.css";

const statusColorMap = {
  0: "warning", // En attente
  1: "success", // Validée
  2: "danger", // Refusée
  3: "default", // Annulée
};

const columns = [
  { uid: "parent", name: "Parent" },
  { uid: "child", name: "Enfant" },
  { uid: "reservation_date", name: "Date de Réservation" },
  { uid: "arriving_date", name: "Date d'Arrivée" },
  { uid: "exit_date", name: "Date de Départ" },
  { uid: "status", name: "Statut" },
  { uid: "actions", name: "Actions" },
];

function DashboardPro() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const [reservations, setReservations] = useState([]);
  const [parents, setParents] = useState([]);
  console.warn(parents);

  const nurseryId = parseInt(localStorage.getItem("nursery_id"), 10);

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return "En attente";
      case 1:
        return "Validée";
      case 2:
        return "Refusée";
      default:
        return "Annulée";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les réservations
        const reservationsResponse = await fetch(
          "http://localhost:3310/api/reservations"
        );
        const reservationsData = await reservationsResponse.json();

        // Récupérer les parents
        const parentsResponse = await fetch(
          "http://localhost:3310/api/parents"
        );
        const parentsData = await parentsResponse.json();

        // Assurer que les données sont des tableaux
        if (!Array.isArray(reservationsData) || !Array.isArray(parentsData)) {
          throw new Error("Invalid data format");
        }

        // Récupérer les enfants et leurs parents
        const reservationsWithChildrenAndParentsPromises = reservationsData.map(
          async (reservation) => {
            if (reservation.nursery_id === nurseryId) {
              const childResponse = await fetch(
                `http://localhost:3310/api/children/${reservation.child_id}`
              );
              const childData = await childResponse.json();

              // Assurez-vous que l'enfant a des informations
              if (childData && childData.parent_id) {
                const parent = parentsData.find(
                  (p) => p.id === childData.parent_id
                );
                return {
                  ...reservation,
                  child: childData,
                  parent: parent || null,
                };
              }
            }
            return null;
          }
        );

        const reservationsWithDetails = await Promise.all(
          reservationsWithChildrenAndParentsPromises
        );
        const filteredReservations = reservationsWithDetails.filter(
          (reservation) => reservation !== null
        );

        setReservations(filteredReservations);
        setParents(parentsData); // Assurez-vous que les parents sont bien initialisés
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchData();
  }, [nurseryId]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  const renderCell = useCallback((reservation, columnKey) => {
    if (!reservation) return null;

    // Destructuration des propriétés de reservation
    const {
      parent,
      child,
      // reservation_date,
      // arriving_date,
      // exit_date,
      reservationStatus,
    } = reservation;

    switch (columnKey) {
      case "parent":
        return parent ? (
          <User
            avatarProps={{ radius: "md", src: parent.photo }}
            description={parent.email}
            name={`${parent.firstname} ${parent.lastname}`}
          >
            {parent.email}
          </User>
        ) : null;
      case "child":
        return child ? (
          <div className="flex flex-col">
            <p className="text-bold text-lg capitalize">{`${child.firstname} ${child.lastname}`}</p>
          </div>
        ) : null;
      case "reservation_date":
      case "arriving_date":
      case "exit_date":
        return formatDate(reservation[columnKey]);
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[reservationStatus]}
            size="lg"
            variant="flat"
          >
            {getStatusText(reservationStatus)}
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
        return reservation[columnKey] || "";
    }
  }, []);

  const pages = Math.ceil(reservations.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return reservations.slice(start, end);
  }, [page, rowsPerPage, reservations]);

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
            Bienvenue <strong>{nurseryId}</strong>
          </p>
          <p className="texts card-user-annonces">
            {nurseryId
              ? "Bienvenue sur votre Dashboard!"
              : "Veuillez compléter votre profil pour une meilleure visibilité"}
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
                <TableRow key={item?.id}>
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

export default DashboardPro;
