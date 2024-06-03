package Cminder.Demo2.Repositories;

import Cminder.Demo2.Models.Nota;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NotaRepository extends JpaRepository<Nota, Long> {
}
