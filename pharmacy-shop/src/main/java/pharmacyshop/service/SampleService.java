package pharmacyshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacyshop.dto.SampleDTO;
import pharmacyshop.entity.SampleEntity;
import pharmacyshop.repository.SampleRepository;

import java.util.Optional;

@Service
public class SampleService {

    private SampleRepository sampleRepository;

    @Autowired
    public SampleService(SampleRepository sampleRepository) {
        this.sampleRepository = sampleRepository;
    }

    public SampleDTO getSampleFromId(Long id) {
        Optional<SampleEntity> sampleEntity = sampleRepository.findFirstById(id);

        SampleDTO sampleDTO = new SampleDTO();

        if (sampleEntity.isPresent()) {
            sampleDTO.setA(sampleEntity.get().getId());
            sampleDTO.setB(sampleEntity.get().getPersonName());
        } else {
            sampleDTO.setA(Long.valueOf(0));
            sampleDTO.setB("none");
        }

        return sampleDTO;
    }
}
