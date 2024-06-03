package Cminder.Demo2.Services;

import Cminder.Demo2.Models.Nota;
import Cminder.Demo2.Repositories.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaService {
    @Autowired
    NotaRepository notaRepository;
    public List<Nota> mostrarNotasPorId(long id) {

        return notaRepository.findAll();
    }
}
