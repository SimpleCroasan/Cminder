package Cminder.Demo2.Controllers;

import Cminder.Demo2.Models.Asignatura;
import Cminder.Demo2.Services.AsignaturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/asignaturas")
public class AsignaturaController {
    @Autowired
    private AsignaturaService asignaturaService;

    @GetMapping("")
    public ResponseEntity<List<Asignatura>> getAllAsignaturas() {

        return ResponseEntity.ok(asignaturaService.mostrarAsignaturas());
    }
}
