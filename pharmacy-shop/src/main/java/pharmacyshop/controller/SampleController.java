package pharmacyshop.controller;

import pharmacyshop.dto.SampleDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SampleController {

    @CrossOrigin
    @GetMapping("/sample")
    public ResponseEntity<SampleDTO> getSample() {
        return ResponseEntity.ok(new SampleDTO(5, "nedko"));
    }
}
