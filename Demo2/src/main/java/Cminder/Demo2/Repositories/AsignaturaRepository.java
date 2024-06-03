package Cminder.Demo2.Repositories;

import Cminder.Demo2.Models.Asignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryNameSpaceHandler;

public interface AsignaturaRepository extends JpaRepository<Asignatura,Long> {
}
