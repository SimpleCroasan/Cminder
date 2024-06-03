package Cminder.Demo2.Services;

import Cminder.Demo2.Models.Asignatura;
import Cminder.Demo2.Repositories.AsignaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AsignaturaService{
    @Autowired
    AsignaturaRepository asignaturaRepository;

    public List<Asignatura> mostrarAsignaturas(){

        return asignaturaRepository.findAll();

    }
}
