package pharmacyshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import pharmacyshop.dto.SampleDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pharmacyshop.service.SampleService;

@RestController
public class SampleController {

    private SampleService sampleService;

    @Autowired
    public SampleController(SampleService sampleService) {
        this.sampleService = sampleService;
    }

    @CrossOrigin
    @GetMapping("/sample")
    public ResponseEntity<SampleDTO> getSample() {
        Long id = Long.valueOf(5);
        return ResponseEntity.ok().body(sampleService.getSampleFromId(id));
    }
}
